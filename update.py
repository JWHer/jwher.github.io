import os, json, yaml, tqdm, re
dry_run = True

# 1. update posts
delimiter = '---\n'
input_path = "./posts/"
output_path = './src/assets/posts/'

mkdw_list = os.listdir(input_path)
regex = re.compile(r"\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*.*md")
mkdw_list = [ mkdw for mkdw in mkdw_list if regex.match(mkdw)]
meta_list = []

# 1-1 parse meta & save
for idx, mkdw in enumerate(tqdm.tqdm(mkdw_list), 1):
    with open(os.path.join(input_path, mkdw), 'r', encoding='utf-8') as mkdw_file:
        mkdw_text = mkdw_file.read()
    meta_start = mkdw_text.find(delimiter)
    mkdw_text = mkdw_text[meta_start+len(delimiter):]

    meta_end = mkdw_text.find(delimiter)
    meta_yaml = mkdw_text[:meta_end]
    mkdw_text = mkdw_text[meta_end+len(delimiter):]

    meta = yaml.safe_load(meta_yaml)
    meta['id'] = idx
    meta['name'] = mkdw[11:-3]
    meta['file_name'] = mkdw

    meta_list.append(meta)
    if dry_run:
        print(f"name [{mkdw}] parsed")
    else:
        with open(
            os.path.join(output_path, os.path.basename(mkdw)), 'w', encoding='utf-8'
        ) as mkdw_file:
            mkdw_file.write(mkdw_text)

# 1-2 sort by category
categories = {}
for meta in tqdm.tqdm(meta_list):
    for category in meta['categories']:
        name = meta['name']
        if category in categories:
            categories[category].append(name)
        else:
            categories[category] = [name]
post_list = {
    "list": meta_list,
    "categories": categories
}

if dry_run:
    print("post list")
    print(post_list)
else:
    with open(os.path.join(output_path, 'post-list.json')) as json_file:
        json.dump(post_list, json_file, indent=2)
"""
{
    "layout": "",
    "title": "",
    "description": "",
    "thumbnail-image": "",
    "feature_image": "",
    "date": "yyyy-MM-dd hh:mm:ss",
    "categories": [],
    "comments": "",
    /* "katex": bool */
}
"""

# 2. update mystory

# ...