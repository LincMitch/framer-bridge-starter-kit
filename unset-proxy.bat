setx HTTP_PROXY ""
setx HTTPS_PROXY ""
setx HTTP_PROXY "" /M
setx HTTPS_PROXY "" /M
git config --global --unset http.proxy
git config --global --unset https.proxy
sleep 5