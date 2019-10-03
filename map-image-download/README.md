# download-manager

下载《僵尸毁灭工程》地图图片

## 环境需求

- nodejs

## 安装

```
    npm install
```

## 运行

```
    npm start
```

运行后会在 **maps/SurvivalL0/map_files** 文件夹下保存图片。

## 启动 url 下载服务

```
    npm run serve
```

运行后,调用以下地址，用以现在指定文件。

调用例： http://127.0.0.1:3200/pic?dir=2&filename=0_0.jpg
