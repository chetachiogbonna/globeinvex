import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Image from "next/image"
import { useState } from "react"

type AlertModelProps = { 
  icon?: "success" | "error", 
  title: string, 
  desc?: string, 
  alt?: string, 
  continueButtonAction: () => void
}

function AlertModel({ icon, title, desc, alt, continueButtonAction }: AlertModelProps) {
  const [isOpen, setIsOpen] = useState(true)

  const handleDialogContinue = () => {
    continueButtonAction()
    setIsOpen(false)
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col justify-center items-center">
            {icon && <Image 
              src={icon === "success" ? "/images/success.gif" : "/images/error.gif"}
              alt={alt || "icon"}
              width={50}
              height={50}
            />}

            {title}
          </AlertDialogTitle>
          {desc && <AlertDialogDescription className="text-center">
           {desc}
          </AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={handleDialogContinue}
            className="bg-green hover:bg-green w-full text-white px-4 py-2 rounded-md"
          >
            Okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertModel