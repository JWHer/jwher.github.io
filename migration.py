import os, json, yaml, tqdm, re
from urllib.request import urlopen
dry_run = False

# 1. update posts
delimiter = '---\n'
input_path = "./posts/"
output_path = './output/' #'./src/assets/posts/'

mkdw_list = os.listdir(input_path)
regex = re.compile(r"\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*.*md")
mkdw_list = [ mkdw for mkdw in mkdw_list if regex.match(mkdw)]
meta_list = []

# 1-1 parse meta & save
def parse_meta(mkdw_list:list):
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

        meta['title'] = str(meta['title'])
        meta['date'] = meta['date'].strftime('%Y-%m-%d %H:%M:%S')
        if 'excerpt' in meta: meta['description'] = meta.pop('excerpt')
        meta['description'] = str(meta['description']).strip()
        if 'redirect_from' in meta: del meta['redirect_from']
        if 'aside' in meta: del meta['aside']
        if 'feature_text' in meta: del meta['feature_text']

        meta_list.append(meta)

        new_mkdw = f"{mkdw[:-3]}/index.md"
        new_meta = {
            'slug': meta['name'],
            'title': meta['name'].replace('-', ' ').title(),
            'description': meta['title'],
            'authors': ['jwher'],
            'tags': meta['categories']
        }
        new_mkdw_text =f"""{delimiter}{yaml.dump(new_meta, allow_unicode=True)}{delimiter}{
            re.sub(
                " style=.+?(?=>)","",mkdw_text.replace('<!-- more -->', '<!--truncate-->').replace(' markdown=1', '')
            )}"""

        if dry_run:
            print(f"name [{mkdw}] parsed")
        else:
            # with open(
            #     os.path.join(output_path, os.path.basename(mkdw)), 'w', encoding='utf-8'
            # ) as mkdw_file:
            #     mkdw_file.write(mkdw_text)
            new_path = os.path.join(output_path, new_mkdw)
            if not os.path.isdir(os.path.dirname(new_path)):
                os.makedirs(os.path.dirname(new_path))
            with open(new_path, 'w', encoding='utf-8') as mkdw_file:
                mkdw_file.write(new_mkdw_text)
    return meta_list

# 1-2 sort by category
def sort_by_category(meta_list:list):
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
        with open(
            os.path.join(output_path, 'post-list.json'),
            'w', encoding='utf-8'
        ) as json_file:
            json.dump(post_list, json_file, indent=2, ensure_ascii=False)
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
def update_mystory():
    endpoint = 'https://graph.instagram.com'
    token = 'IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD'
    response = urlopen(f'{endpoint}/me/media?fields=id,caption&access_token={token}')
    image_list = []

    media_list = json.loads(response.read().decode('utf-8'))['data']
    for media in tqdm.tqdm(media_list):
        response = urlopen(f'{endpoint}/{media["id"]}?fields=media_type,media_url&access_token={token}')
        result = json.loads(response.read().decode('utf-8'))
        if result['media_type']=='IMAGE':
            image_list.append({"media_url":result['media_url'], "caption":media['caption']})

    if dry_run:
        print('image_list')
        print(image_list)
    else:
        with open(
            os.path.join('./src/app/components/about-me', 'image-list.json'),
            'w', encoding='utf-8'
        ) as json_file:
            json.dump(image_list, json_file, indent=2, ensure_ascii=False)    
    """
    const response = await fetch('/api/me/media?fields=id,caption&access_token=IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD');
    let mediaList: {data:Array<{id:string, caption:string}>} = await response.json();
    console.log(mediaList);
    for(const media of mediaList.data){
    // console.log("media:"+media);
    const response = await fetch('/api/'+media.id+'?fields=media_type,media_url&access_token=IGQVJVNW5TbldjdWo5NkhCeDRvOUFLUU55a2xsbUtJSXllaUFZAYmozUUFoNnNERUZACOXpENG9kUFMwcGlHd3B4YnpheEV3ODRrcFA0QVpoa1ZApOVpleGlNVUlZAU1ZAMQ21ZAbGRvdy1nOVdMQW9ZAQWhDTAZDZD');
    let result:{media_type:string, media_url:string} = await response.json();
    console.log(result);
    if(result.media_type=='IMAGE'){
        this.data.push({media_url:result.media_url, caption:media.caption});
    }
    }
    console.log(this.data);
    """

# ...
parse_meta(mkdw_list)
