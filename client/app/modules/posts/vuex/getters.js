export function rows(state) {
	return state.posts.rows;
}

export function hasMore(state) {
	return state.posts.hasMore;
}

export function fetching(state) {
	return state.posts.fetching;
}

export function sort(state) {
	return state.posts.sort;
}

export function viewMode(state) {
	return state.posts.viewMode;
}
