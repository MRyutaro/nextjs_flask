import os  # pathの取得などに使う
import json  # 何かと使う
from flask import Flask  # flaskを使うのに絶対必要
from flask import jsonify  # jsonを送るのに使う
from flask import request  # queryなどを取得するのに使う
from flask_cors import CORS, cross_origin  # corsの設定
from flask_sqlalchemy import SQLAlchemy  # databaseを使うために必要

basedir = os.path.abspath(os.path.dirname(__file__))  # 実行folderのpathを取得、何かと使う

app = Flask(__name__, instance_relative_config=True)  # アプリの作成
app.config.from_mapping(  # アプリの設定
    None  # 今は何も無い
)


@app.route("/youtube/<search>")
def get_url(search):
    return jsonify({"url": f"https://www.youtube.com/results?search_query={search}"})


@app.route("/qiita/<search>")
def create_url(search):
    return jsonify({"url": f"https://qiita.com/search?q={search}"})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # アプリの実行
