---
title: 入服指南
date: 2026-08-30 10:36:13
permalink: /basic/entry-guide
categories:
  - basic
tags:
  - 
author: 
  name: FreeCore
  link: https://github.com/CoreNyan
---
# FreeCore 玩家入服指南

欢迎来到 **FreeCore（自由核心）**！本指南将带你完成从下载客户端到成功进服的全部流程。  
本服为**基岩版-Java版互通**，请根据你的喜好选择对应的游戏平台（推荐优先**Java版**）。

---

## 一、Java版（仅支持电脑，推荐电脑玩家优先选择）

电脑端使用 **HMCL 启动器**，并通过服务器自建的皮肤站账号系统进行登录验证。

### 1. 下载并安装 HMCL 启动器

前往 HMCL 官网下载最新版本并安装：
`https://hmcl.huangyuhui.net/`

### 2. 注册皮肤站账号

打开浏览器，访问：

```
https://account.freecore.cc
```

按照页面提示完成注册（邮箱 + 密码）。**这个账号将作为你在 FreeCore 服务器的唯一身份**，请牢记账号密码。

### 3. 在 HMCL 中添加皮肤站账号进行登录验证

1. 打开 HMCL，进入「账户」设置页面 <img width="798" height="484" alt="image" src="https://github.com/user-attachments/assets/4f532a49-eeca-47f4-a754-3896c6016024" />
2. 选择「添加外置登录账户」（Authlib Injector / 外置账户登录） <img width="806" height="480" alt="image" src="https://github.com/user-attachments/assets/a4011036-d885-43f0-b573-9729dcdc3d75" />
3. 添加认证服务器时，认证服务地址填写：
   ```
   https://account.freecore.cc/api/yggdrasil
   ```
   > 如果 HMCL 提示无法自动识别，请手动填写上方地址；若仍有问题，请联系服务器管理员确认最新地址。  
   <img width="800" height="485" alt="image" src="https://github.com/user-attachments/assets/a5fec1c4-8ab2-480b-b1dd-c8375d65b7a7" />
4. 使用刚才注册的皮肤站邮箱和密码登录<img width="792" height="487" alt="image" src="https://github.com/user-attachments/assets/ea692f45-262f-43fe-9933-c1f8d9f2659f" />
5. 登录成功后，HMCL 账户列表中会出现你的角色，选中它作为当前登录账户<img width="799" height="492" alt="image" src="https://github.com/user-attachments/assets/8ccd0a7e-4b80-4261-a147-1da800bb77b1" />

### 4. 加入服务器

1. 在 HMCL 主界面创建/选择对应 Java 版本的游戏实例并启动<img width="796" height="490" alt="image" src="https://github.com/user-attachments/assets/6ce652a0-82c9-483c-8db2-40fdf19b40fc" /> 
   > 目前版本仅支持26.2，如果您使用的不是FreeCore官方客户端，请前往`下载`去获取合适的游戏版本。
2. 进入游戏后，点击「多人游戏」→「添加服务器」
3. 服务器地址填写：
   ```
   mc.freecore.cc
   ```
4. 保存后即可点击进入，开始游戏！

---

## 二、基岩版（支持手机、电脑）

手机端使用 **Minecraft 基岩版**（Bedrock Edition），通过微软账号登录。

### 1. 下载 Minecraft 基岩版

访问网站[Minebbs我的世界国际版下载](https://mc.minebbs.com/)进行游戏下载(支持Android、ios、Windows)

### 2. 登录微软账号

打开游戏后，按提示使用你的 **微软账号（Microsoft Account）** 登录。如果还没有微软账号，可在登录页面直接注册一个。

### 3. 添加并连接服务器

1. 进入游戏主界面，点击「游戏」→「服务器」→「+ 添加服务器」<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/ad37a05f-befc-407a-a4c4-1f98585d544e" />
2. 服务器信息填写如下：

   | 项目 | 内容 |
   |------|------|
   | 服务器名称 | FreeCore（可自定义） |
   | 服务器地址 | `mc.freecore.cc` |
   | 端口 | `36505` |
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/78beb178-bed6-480f-bd77-295a81be2a9a" />
3. 保存后点击该服务器即可进入游戏！

---

## 常见问题

- **忘记皮肤站密码怎么办？** 前往 `account.freecore.cc` 使用找回密码功能，或联系管理员处理。
- **电脑端提示认证失败？** 检查 HMCL 中的认证服务器地址是否正确，以及网络是否能正常访问 `account.freecore.cc`。
- **手机端连接超时？** 请确认端口号 `36505` 填写正确，并检查手机网络是否稳定。

如有其他问题，可在交流群内寻求帮助。祝你在 FreeCore 玩得愉快！
