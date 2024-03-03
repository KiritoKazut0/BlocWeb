export default function Input({text}) {
    return (
      <>
        <input 
          type="text" 
          placeholder={text} 
          style={{
            height: "2.2rem", 
            width: "40vw", 
            border: "none", 
            outline: "none" 
          }}
        />
      </>
    );
  }
  