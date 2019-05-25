import { Component } from "react";
import db from "../firebase";

const defaultState = {
  first: "",
  last: "",
  email: "",
  error: null,
  submittedAt: null,
  subscribedAt: null,
};

export class Mailtrain extends Component {
  state = defaultState;

  onSubmit = e => {
    e.preventDefault();

    const { first, last, email } = this.state;
    const { onConvert } = this.props;

    if (!/\S+@\S+/.test(email)) {
      this.setState({
        error:
          "WELP it sure will be hard to send you an email if you don't give me your email address ಠ_ಠ",
      });
      return;
    }

    this.setState({ submittedAt: +new Date() });

    db.collection("emails")
      .add({
        first,
        last,
        email,
        listId: "BkpoOc5hG",
      })
      .then(docRef => {
        const subscribedAt = +new Date();
        onConvert({
          first,
          last,
          email,
          firebaseEmailId: docRef.id,
          subscribedAt,
        });

        this.setState({
          subscribedAt,
        });
      })
      .catch(error => {
        this.setState({
          error: `Uhoh - something went wrong: ${error.message}`,
          submittedAt: null,
        });
      });
  };

  render() {
    const { first, last, email, submittedAt, error, subscribedAt } = this.state;

    const isLoading = !!submittedAt;

    const isSubscribed = !!subscribedAt;

    return (
      <div className="rounded border border-grey-light sm:flex flex-row justify-between leading-normal p-4 mt-6">
        <div className="">
          <h3 className="text-black font-bold text-xl mb-2 font-sans">
            Free "Microconf Recap" eBook
          </h3>
          <p className="text-grey-darker text-base">
            I'm sending out a beautiful PDF eBook of notes from every MicroConf
            Starter and Growth talk – both Speaker and Attendee. Want a copy?
          </p>
          <form className="" onSubmit={this.onSubmit} className="">
            <fieldset disabled={isLoading}>
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block font-sans text-grey-darker text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darkest leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="Christian"
                  value={first}
                  onChange={e => this.setState({ first: e.target.value })}
                  disabled={isLoading}
                />
                <small
                  id="nameHelp"
                  className="italic text-xs text-grey-darker"
                >
                  What your friends call you
                </small>
              </div>

              <div className="my-4">
                <label
                  htmlFor="name"
                  className="block font-sans text-grey-darker text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darkest leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="christian@gen.co"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div
                  className="border rounded bg-red-lighter text-red-darkest p-4 mb-2"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 w-full font-sans text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isLoading ? "k hang on..." : "Get the book"}
              </button>
            </fieldset>
          </form>
        </div>
        <div>
          <img src="/static/covers/3d.png" alt="" className="" />
        </div>
      </div>
    );
  }
}

export default Mailtrain;
