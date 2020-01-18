shopt -s extglob  # to enable extglob
PROJECT_NAME=$(node -p "require('./package.json').name")
pid=$(cat ./build/related)
PROJECTS=($(echo $pid | tr " " "\n"))
for project in "${PROJECTS[@]}"
do
  # echo $project
  if [[ $project == '#'* ]]; then
    # echo "skiped $project"
    continue
  fi
  COPY_PATH=$project/node_modules/$PROJECT_NAME/
  if [[ ! -e $COPY_PATH ]]; then
    mkdir $COPY_PATH
  fi
  echo $COPY_PATH
  rsync -av -progress --exclude={node_modules,build,coverage,test} ./* $COPY_PATH
done
