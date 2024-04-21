import { type PropsWithChildren } from 'react'
import { MenuId } from '~/components/Navigation/NavigationMenu/NavigationMenu'
import Layout from '~/layouts/guides'

const GuidesLayout = ({ children }: PropsWithChildren) => (
  <Layout menuId={MenuId.Storage}>{children}</Layout>
)

export default GuidesLayout
