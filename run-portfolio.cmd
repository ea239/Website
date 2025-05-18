@echo off
REM Evan Zhang Portfolio 一键运行脚本
REM 需先安装好依赖（npm install 或 pnpm install）

cd /d %~dp0

REM 启动 Next.js 开发服务器
npx next dev 