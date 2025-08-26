
export default function Plan(){

    return (
        <>
        <div className="absolute inset-0 opacity-100 z-0">
        <div className="absolute top-20 left-10 w-24 h-24" style={{
          backgroundImage: "url('/images/image1.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 5px white)' // contour lumineux
        }}
        ></div>
        
                  <div className="absolute bottom-20 right-10 w-24 h-24" style={{
          backgroundImage: "url('/images/image2.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 5px white)' // contour lumineux
        }}></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16" style={{
          backgroundImage: "url('/images/image3.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 5px white)' // contour lumineux
        }}></div>
                </div>
        </>
    )
}