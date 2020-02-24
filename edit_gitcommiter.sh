#!/bin/sh

git filter-branch --force --env-filter '
    if [ "$GIT_COMMITTER_NAME" = "liyubo" ];
    then
        GIT_COMMITTER_NAME="liyubo";
        GIT_COMMITTER_EMAIL="1214046231@qq.com";
        GIT_AUTHOR_NAME="liyubo";
        GIT_AUTHOR_EMAIL="1214046231@qq.com";
    fi' -- --all
