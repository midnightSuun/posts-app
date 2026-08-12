import {
    createFileRoute,
    Outlet,
} from '@tanstack/react-router'
import { Layout } from '../layout/layout'
import { AuthGuard } from '@/auth'

export const Route = createFileRoute(
    '/__protected'
)({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <AuthGuard>
            <Layout>
                <Outlet />
            </Layout>
        </AuthGuard>
    )
}
