
import { useAuth } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'


const ProtectedAuth = ({ children }) => {
    const { isAuthenticated, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600'></div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to='/login' state={{ from: location.pathname }} replace />
    }

    return children
}

export default ProtectedAuth