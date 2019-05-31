export function getRedirectPath(user) {
	/*
	* 根据用户信息，返回跳转地址
	* user.type /boss /genius
	* user.avatar /bossinfo /geniusinfo
	 */
	let url = (user.type === 'boss' ? '/boss' : '/genius')
	if (!user.avatar) {
		url += 'info'
	}
	return url
}