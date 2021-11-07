import React from 'react';
import { useMatch, useResolvedPath } from 'react-router';
import { Link } from 'react-router-dom';

export default function CustomLink({ children, to, ...props }) {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	return (
		<li className={match ? 'active' : ''}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
