import os
import shutil

def create_backup_folder(directory):
    backup_folder = os.path.join(directory, 'backup')
    if not os.path.exists(backup_folder):
        os.makedirs(backup_folder)

def copy_html_files_to_backup(directory):
    create_backup_folder(directory)
    
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            source_file_path = os.path.join(directory, filename)
            backup_folder = os.path.join(directory, 'backup')
            destination_file_path = os.path.join(backup_folder, filename)
            
            try:
                shutil.copy(source_file_path, destination_file_path)
                print(f"Copied {filename} to backup folder.")
            except Exception as e:
                print(f"Failed to copy {filename}: {str(e)}")

def extract_header_footer(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        file_contents = file.read()
        
        # ヘッダーとフッターの開始と終了位置を見つける
        header_end = file_contents.find('</header>') + len('</header>')
        footer_start = file_contents.find('<footer>')
        
        # ヘッダーとフッターのテキストを抽出
        header_text = file_contents[:header_end]
        footer_text = file_contents[footer_start:]

    return header_text, footer_text

def replace_html_content(directory, source_file):
    # ヘッダーとフッターのテキストを抽出
    header_text, footer_text = extract_header_footer(source_file)

    # 指定されたディレクトリ内の.htmlファイルを処理
    for filename in os.listdir(directory):
        if filename.endswith(".html") and not filename == source_file_path not filename == "Model-List.html":
            html_file_path = os.path.join(directory, filename)
            
            # ファイル内の内容を読み込む
            with open(html_file_path, 'r', encoding='utf-8') as html_file:
                file_contents = html_file.read()

            # ヘッダーとフッターの間のテキストを抽出
            header_index = file_contents.index('</header>') + len('</header>')
            footer_index = file_contents.index('<footer>')
            contents_text = file_contents[header_index:footer_index]

            # テキストを置き換えてファイルに書き込む
            new_contents = header_text + contents_text + footer_text
            with open(html_file_path, 'w', encoding='utf-8') as updated_file:
                updated_file.write(new_contents)

if __name__ == "__main__":
    directory_path = "."
    source_file_path = "_header_fooder.html"
    
    copy_html_files_to_backup(directory_path)
    replace_html_content(directory_path, source_file_path)
