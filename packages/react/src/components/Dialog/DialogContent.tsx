import * as RDialog from '@radix-ui/react-dialog'

import { createComponent } from '@/utils'
import { Icon } from '../Icon'

import * as styles from '../Dialog/styles'

export type DialogContentProps = RDialog.DialogContentProps
export const DialogContent = createComponent<DialogContentProps>(
  ({ children, ...props }) => (
    <RDialog.Portal>
      <RDialog.Overlay className={styles.overlay()} />
      <RDialog.Content {...props} className={styles.content()}>
        {children}
        <RDialog.Close className={styles.closeButton()}>
          <Icon icon="BiX" size={20} color="gray10" />
        </RDialog.Close>
      </RDialog.Content>
    </RDialog.Portal>
  )
)
