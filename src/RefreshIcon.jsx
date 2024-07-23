const RefreshIcon = ({ onClick, style, props}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      onClick={onClick}
      style={style}
      {...props}
    >
      <title>{"Refresh preview"}</title>
      <path
        fillRule="evenodd"
        d="M3.833 8a4.166 4.166 0 0 1 8.095-1.389.502.502 0 0 0 .042.089H8.8a.5.5 0 0 0 0 1h3.767a.6.6 0 0 0 .6-.6V3.333a.5.5 0 1 0-1 0v1.613a5.166 5.166 0 1 0 .307 5.638.5.5 0 1 0-.866-.501A4.166 4.166 0 0 1 3.833 8Z"
        clipRule="evenodd"
      />
    </svg>
  )
  export default RefreshIcon;