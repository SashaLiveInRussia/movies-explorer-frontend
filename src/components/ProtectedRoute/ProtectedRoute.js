import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import logoutStorage from '../../utils/logoutStorage';
import { getUserData } from '../../utils/MainApi';

function ProtectedRoute({ children, redirect, ...props }) {
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true)
		dispatch(getUserData())
			.unwrap()
			.then(() => {
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
				logoutStorage();
			});
	}, [dispatch]);

	if (loading) {
		return null;
	}

	if ((auth === true && props.auth) || (auth === false && !props.auth)) {
		return children
	}

	if ((auth === false && props.auth === true) || (auth === true && props.auth === false)) {
		return <Redirect to={redirect} />
	}

	return null;

}

export default ProtectedRoute