import React from "react";
import "../../BP9global.css";
import "./NewPostBP3.css";

export default function NewPostBP3(props) {
    let { handleSubmit, amountInput, error, setAmountInput, color, setColor, category, setCategory } = props;
    return (
        <div className="BP9container3 fontClr fs-20 BP9-child3 py-5">
            <h3 className="fs-25">Naujas Įrašas</h3>
            <form
                className="BP9Container3-1 BP9clrGray"
                onSubmit={handleSubmit}
            >
                <select
                    className="BP9selectContainer IncomeNewEntry-input F-size-20"
                    aria-label="Default select example"
                    id="programSelect"
                    name="programSelect"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option disabled value="">
                        Kategorija
                    </option>
                    <option>Transportas</option>
                    <option>Maistas ir gėrimai</option>
                    <option>Pramogos</option>
                    <option>Mokesčiai</option>
                    <option>Paslaugos</option>
                    <option>Pirkiniai ir daiktai</option>
                    <option>Kitos išlaidos</option>
                </select>
                {error && category.length <= 0 ? (
                    <div className="Error-msg">Šis laukelis yra privalomas</div>
                ) : (
                    ""
                )}
                <select
                    className="BP9selectContainer IncomeNewEntry-input F-size-20"
                    aria-label="Default select example"
                    id="colorSelect"
                    name="colorSelect"
                    required
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                >
                    <option disabled value="">
                        Spalva
                    </option>
                    <option value='sharpPink'>Rožinė</option>
                    <option value='bubblegumPink'>Šviesiai Rožinė</option>
                    <option value='purple'>Violetinė</option>
                    <option value='blue'>Mėlyna</option>
                    <option value='lightBlue'>Šviesiai Mėlyna</option>
                    <option value='green'>Žalia</option>
                    <option value='yellow'>Geltona</option>
                    <option value='orange'>Oranžinė</option>
                    <option value='red'>Raudona</option>
                </select>
                {error && color.length <= 0 ? (
                    <div className="Error-msg">Šis laukelis yra privalomas</div>
                ) : (
                    ""
                )}
                <input
                    onChange={(e) => setAmountInput(e.target.value)}
                    type="number"
                    id="amountInput"
                    name="amountInput"
                    value={amountInput}
                    className="form-control IncomeNewEntry-input F-size-20"
                    placeholder="Suma"
                />
                {error && amountInput.length <= 0 ? (
                    <div className="Error-msg">Šis laukelis yra privalomas</div>
                ) : (
                    ""
                )}
                <button onClick={handleSubmit} type="submit" className="fs-32px fontClr BP9button">Pridėti įrašą</button>
            </form>            
        </div>
    );
}
