import { ButtonHTMLAttributes } from 'react'
import { cva } from 'class-variance-authority'

const classes = cva('border h-12 rounded-full px-6 font-medium', {
    variants: {
        varinat: {
            primary: "bg-action text-white border-white/20",
            secondary: "border-black/20 text-black bg-secondary"
        },
        size: {
            sm: "h-10"
        }
    }
})

const Button = (props: { variant: "primary" | "secondary"; size?: "sm"; } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { variant, className, size, ...otherProps } = props;
    return (
        <button className={classes({ varinat: variant, size, className: className })} {...otherProps} />
    )
}

export default Button