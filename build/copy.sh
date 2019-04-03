shopt -s extglob  # to enable extglob
PROJECT_NAME=$(node -p "require('./package.json').name")
pid=$(cat ./build/related)
PROJECTS=($(echo $pid | tr " " "\n"))
for project in "${PROJECTS[@]}"
do
  COPY_PATH=$project/node_modules/$PROJECT_NAME/
  if [[ ! -e $COPY_PATH ]]; then
    mkdir $COPY_PATH
  fi
  cp -r !(node_modules*|build*|coverage*|test*) $COPY_PATH
  echo "copied to $COPY_PATH"
done
