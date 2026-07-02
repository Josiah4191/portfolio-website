export default function SharpPlayIcon({
                                          size = 24,
                                          color = "currentColor",
                                          strokeWidth,
                                          className,
                                          ...props
                                      }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            className={className}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <polygon points="6,4 20,12 6,20" />
        </svg>
    );
}