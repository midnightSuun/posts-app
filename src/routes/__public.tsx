import { UnauthorizedGuard } from '@/auth'
import {
    createFileRoute,
    Outlet,
} from '@tanstack/react-router'

export const Route = createFileRoute(
    '/__public'
)({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <UnauthorizedGuard>
            <Outlet />
        </UnauthorizedGuard>
    )
}
