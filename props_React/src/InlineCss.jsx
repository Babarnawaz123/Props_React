import profileImg from "./assets/profile.jpg";

function InlineCss() {
  return (
    <div>
      <h2 style={{ color: "blue" }}>Hello there!</h2>
      <p>This component uses inline CSS styling.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
            width: "401px",
            height: "600px",
            backgroundColor: "lightblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          <img
            src={profileImg}
            alt="img profile"
            style={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              paddingTop: "20px",
            }}
          />
          <div
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "",
              marginTop: "50px",
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            <p
              style={{
                textAlign: "center",
                padding: "0px",
                margin: "0px",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "33%",
              }}
            >
              Babar Nawaz
            </p>
            <p
              style={{
                textAlign: "center",
                padding: "0px",
                marginBottom: "130px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus placeat quo alias quidem sapiente. Iure laboriosam nisi
              velit odio officiis, ut temporibus ipsam soluta voluptatum,
              delectus nostrum repudiandae illum suscipit!
            </p>
          </div>
        </div>
        {/*card 2 */}
        <div
          style={{
            borderRadius: "20px",
            width: "401px",
            height: "600px",
            backgroundColor: "lightblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          <img
            src={profileImg}
            alt="img profile"
            style={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              paddingTop: "20px",
            }}
          />
          <div
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "",
              marginTop: "50px",
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            <p
              style={{
                textAlign: "center",
                padding: "0px",
                margin: "0px",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "33%",
              }}
            >
              Muhammad Tariq
            </p>
            <p
              style={{
                textAlign: "center",
                padding: "0px",
                marginBottom: "130px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus placeat quo alias quidem sapiente. Iure laboriosam nisi
              velit odio officiis, ut temporibus ipsam soluta voluptatum,
              delectus nostrum repudiandae illum suscipit!
            </p>
          </div>
        </div>
        {/*card 3 */}
        <div
          style={{
            borderRadius: "20px",
            width: "401px",
            height: "600px",
            backgroundColor: "lightblue",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          <img
            src={profileImg}
            alt="img profile"
            style={{
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              paddingTop: "20px",
            }}
          />
          <div
            style={{
              width: "300px",
              height: "250px",
              backgroundColor: "",
              marginTop: "50px",
              flexWrap: "wrap",
              display: "flex",
            }}
          >
            <p
              style={{
                textAlign: "center",
                padding: "0px",
                margin: "0px",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "33%",
              }}
            >
              Muhammad Hadi
            </p>
            <p
              style={{
                textAlign: "center",
                padding: "0px",
                marginBottom: "130px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus placeat quo alias quidem sapiente. Iure laboriosam nisi
              velit odio officiis, ut temporibus ipsam soluta voluptatum,
              delectus nostrum repudiandae illum suscipit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InlineCss;
