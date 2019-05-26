# push most recent versions of talks to firebase - potentially dangerous?
# pushd ../editor
# x/build.sh
# popd

yarn run export && \
cp fuck-service-workers.js out/service-worker.js && \
firebase deploy --only hosting
