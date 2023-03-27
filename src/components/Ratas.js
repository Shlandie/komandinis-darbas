const Ratas = () => {

    // document.querySelector(".monthButton1");


    // const monthNumber = 0;
    // const [month, setMonth] = useState("Gruodis");



    return (

        <>
            <div className="ratas">
                <div className="ratas1">
                    <select name="ratas1__selectSeason">
                        <option value="sausis">Sausis</option>
                        <option value="vasaris">Vasaris</option>
                        <option value="kovas">Kovas</option>
                        <option value="balandis">Balandis</option>
                        <option value="geguze">Gegužė</option>
                        <option value="birzelis">Birželis</option>
                        <option value="liepa">Liepa</option>
                        <option value="rugpjutis">Rugpjūtis</option>
                        <option value="rugsejis">Rugsėjis</option>
                        <option value="spalis">Spalis</option>
                        <option value="lapkritis">Lapkritis</option>
                        <option value="gruodis">Gruodis</option>
                    </select>

                    {/* <button className="monthButton1"> Left </button>
                <h2>{month}</h2>
                <button className="monthButton2"> Right </button> */}
                </div>


                <div className="ratas2">
                    <div className="ratas2__main">

                    </div>

                    <table className="ratas2__data">
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>

            </div>

        </>

    );
}

export default Ratas;