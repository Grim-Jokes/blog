echo name: $1 

if [ -z $1 ]; then
  echo "Blog name needed"
  exit 1
fi

# Create the folders if needed
dir="./blog/$(date '+%Y')/$(date '+%0m')/$(date '+%0d')"
mkdir -p $dir
# Use the current day as the file name
touch $dir/$1.md