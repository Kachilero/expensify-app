#! /usr/bin/env bash

echo "Work around for Watchman"
# Determing if we're on linux and if inotify is present
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN: ${unameOut}"
esac

echo "We are on a ${machine} machine"

if [ ${machine} = "Linux" ]; then
    echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
    echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
    echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
    echo wactchman shutdown-server
fi

echo "Modified the inotify watches and stopped watchman"

exit 0
