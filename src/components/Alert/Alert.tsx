import { AlertProps } from "../../types/types"

export const Alert = ({text}:AlertProps) => { 
  return (
    <div className="w-full bg-amber-400 text-red-600 text-lg">
      {text}
    </div>
) }