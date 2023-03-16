import React from "react";
import { ContainerStyle } from "./style/Container.styled";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";
import { DetailStyle } from "./style/Detail.styled";

const Detail = () => {
  const [detail, setDetail] = React.useState("");
  console.log(detail);

  let params = useParams();

  React.useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.CountryName}`).then(
      (res) => res.json().then((data) => setDetail(data))
    );
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  let moneyname = "";
  let languages = "";

  if (detail == "") {
    return;
  } else {
    let money = Object.values(detail[0].currencies);
    let language = Object.values(detail[0].languages);
    let moneyName = Object.values(money[0]);
    moneyname = moneyName[0];
    languages = language;
  }

  const hasKey = "borders" in detail[0];

  return (
    <DetailStyle>
      <ContainerStyle>
        <button className="back__button" onClick={handleClick}>
          <ArrowLeft size={16} />
          Back
        </button>
        {detail === "" ? null : (
          <div className="details">
            <div>
              <img src={detail[0].flags.svg} />
            </div>
            <div>
              <div>
                <h2>{detail[0].name.common}</h2>
                <div className="sub__info">
                  <div>
                    <p>
                      Native Name:
                      <span className="text2">{detail[0].altSpellings[1]}</span>
                    </p>
                    <p>
                      Population:{" "}
                      <span className="text2">{detail[0].population}</span>
                    </p>
                    <p>
                      Region: <span className="text2">{detail[0].region}</span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span className="text2">{detail[0].subregion}</span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span className="text2">{detail[0].capital}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Top Level Domain:{" "}
                      <span className="text2">{detail[0].tld[0]}</span>
                    </p>
                    <p>
                      Currency: <span className="text2">{moneyname}</span>
                    </p>
                    <p>
                      Languages:
                      <span className="text2">
                        {detail == ""
                          ? null
                          : languages.map((item) => {
                              return item + ",";
                            })}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="border">
                  Border Countries:{" "}
                  <span className="border-countries">
                    {}
                    {hasKey ? (
                      detail[0].borders.map((item) => {
                        return <span className="border-country">{item}</span>;
                      })
                    ) : (
                      <span className="text2">No border country</span>
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </ContainerStyle>
    </DetailStyle>
  );
};

export default Detail;
