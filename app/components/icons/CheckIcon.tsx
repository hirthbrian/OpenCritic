import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

function CheckIcon({ width = 32, height = 32, color }: SvgProps) {
	return (
		<Svg
			fill={color}
			width={width}
			height={height}
			viewBox="0 0 448 512"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
		</Svg>
	);
}

export default CheckIcon;
