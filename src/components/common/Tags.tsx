const Tag = (props: { text: string; textColor: string; bgColor: string }) => {
  
    const { text, textColor, bgColor } = props;

  return (
    <div
      style={{
        color: textColor,
        backgroundColor: bgColor,
        padding: "6px 12px",
        alignItems: "center",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: 400,
        display: "inline-block",
      }}
    >
      {text}
    </div>
  );
};

export default Tag;

// display: inline-flex;
// align-items: center,
// padding: 6px 12px;
// font-size: 14px;
// font-weight: 400;
// color: black;
// background-color: #e7e7e7; 
// /* background-color: #f3faca;  */
// border-radius: 5px; 
