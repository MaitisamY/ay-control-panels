import { useOrganization } from '../context/OrganizationContext'
import { useLocation } from 'react-router-dom'

const useTitleProvider = () => {
    const { organization } = useOrganization()
    const { pathname } = useLocation()

    const lastSegment = pathname.split('/').filter(Boolean).pop();
    const title = `${lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)} | ${organization}`

    return { title }
}

export default useTitleProvider