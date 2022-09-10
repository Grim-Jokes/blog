for d in $(find ./blog/ -type d); do
  mkdir -p "public/$d"
done