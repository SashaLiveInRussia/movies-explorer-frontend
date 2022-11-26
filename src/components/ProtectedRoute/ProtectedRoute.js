import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getUserData } from '../../utils/MainApi';

function ProtectedRoute({ children, redirect }) {
	const dispatch = useDispatch();
	const [auth, setAuth] = useState(null)

	useEffect(() => {
		dispatch(getUserData()).unwrap()
			.then(() => {
				setAuth(true);
			})
			.catch(() => {
				setAuth(false);
			})
	}, [dispatch]);

	if (auth === true) {
		return children
	}

	if (auth === false) {
		return <Redirect to={redirect} />
	}

	return null;

}

export default ProtectedRoute