import { useEffect, useMemo } from "react";

import taiwanDistricts from '../../data/taiwanDistricts.json';


const AddressSelect =({ register, watch, setValue, errors }) =>{

    const selectCity = watch("city");
    const selectDistrict = watch("district");

    const districts = useMemo(() => {
        return taiwanDistricts.find(c => c.city === selectCity)?.districts || [];
    }, [selectCity]);

    useEffect(() => {
        const district = districts.find(
            d => d.name === selectDistrict
        );

        if (district) {
            setValue("zipCode", district.zipCode);
        }
    }, [selectDistrict, districts, setValue]);

    

    return(
    <>
        <div className="col-12">
            <label  htmlFor="city" 
                    className="form-label">聯絡地址
                    <span className="text-danger">*</span>
            </label>
            <div className="row g-2">
        {/* 郵遞區號 */}
                <div className="col-12 col-md-4">
                    <input  type="text"
                            className="form-control bg-light"
                            id="zipCode"
                            name="zipCode"
                            placeholder="郵遞區號"
                            readOnly
                            {...register('zipCode')}/>
                </div>
        {/* 縣市選單 */}
                <div className="col-6 col-md-4">
                    <select className="form-select"
                            name="city"
                            id="city"
                            {...register('city',{required:'請選擇縣市'})}>
                        <option value="">請選擇縣市</option>
                        { taiwanDistricts.map( city => (
                            <option key={city.city} value={city.city}>
                                {city.city}
                            </option>
                        ))}
                    </select>
                    {errors.city && (
                        <small className="text-danger ms-2">{errors.city.message}</small>
                    )}
                </div>
        {/* 行政區選單 */}
                <div className="col-6 col-md-4">
                    <select className="form-select"
                            name="district"
                            id="district"
                            {...register('district',{required: '請選擇鄉鎮市區'})}>
                        <option value="">鄉鎮市區</option>
                        { districts.map( d => (
                            <option key={d.name} value={d.name}>
                                {d.name}
                            </option>
                        ))}   
                    </select>
                    {errors.district && (
                        <small className="text-danger ms-2">{errors.district.message}</small>
                    )}
                </div>
                <div className="col-12">
                    <input  type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="請輸入地址"
                            {...register('address',{required: '請輸入地址'})}/>
                    {errors.address && (
                        <small className="text-danger ms-2">{errors.address.message}</small>
                    )}
                </div>
            </div>
        </div>    
    </>)
}

export default AddressSelect;