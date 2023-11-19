import { useRef } from "react";

const useFirstRender = (): boolean => {
	const ref = useRef<boolean>(true);
	const firstRender = ref.current;
	ref.current = false;
	return firstRender;
};

export default useFirstRender;