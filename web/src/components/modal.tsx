import { X } from 'lucide-react'
import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const ModalVariants = tv({
  base: 'rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 mx-2',

  variants: {
    variant: {
      default: 'w-[640px]',
      smaller: ''
    }
  },

  defaultVariants: {
    variant: 'default'
  }
})
interface ModalProps extends VariantProps<typeof ModalVariants> {
  title: string
  children: ReactNode
  paragraph?: ReactNode
  closeModal: () => void
}

export function Modal({
  title,
  children,
  variant,
  paragraph,
  closeModal
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className={ModalVariants({ variant })}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button type="button" onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          {paragraph && <p className="text-sm text-zinc-400">{paragraph}</p>}
        </div>

        {children}
      </div>
    </div>
  )
}
