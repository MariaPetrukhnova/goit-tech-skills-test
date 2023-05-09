import bg from '.././images/bgx2.png'

export default function Home() {
    return (
    <section >
      <div >
          <div>
        </div>
          <h2 style={{ color: "#5736A3", fontFamily: 'Montserrat', fontWeight: 500, textAlign: 'center', fontSize: 36 }}>Welcome to TweetStats</h2>
          <img src={bg} alt='hero-img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#5736A3', padding: 60}}/>
      </div>
    </section>
    )
};