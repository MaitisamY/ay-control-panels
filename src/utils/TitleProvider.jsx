import { useOrganization } from '../context/OrganizationContext'
import { useLocation } from 'react-router-dom'

const useTitleProvider = () => {
    const { organization } = useOrganization()
    const { pathname } = useLocation()

    const lastSegment = pathname.split('/').filter(Boolean).pop();
    const title = `${lastSegment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | ${organization}`

    return { title }
}

export default useTitleProvider