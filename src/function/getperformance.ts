import {st} from "springtype/core";
import {IPerformance} from "../interface/iperformance";

export let getPerformance = async (): Promise<Array<IPerformance>> => {
    const performances: Array<IPerformance> = [];
    console.log('performanceData');
    let performanceData = await getPerformanceData();
    let callAmountData = await getCallAmountData();
    for (const fnName of Object.keys(performanceData)) {
        performances.push({
            name: fnName,
            callAmount: callAmountData[fnName],
            data: performanceData[fnName]
        })
    }
    return performances;
};

const getPerformanceData = async (): Promise<object> => {
    return await triggerPerformance('JSON.stringify(window.$st.MEASURE_PERFORMANCE_CALL_TIME_AVERAGE)');
};

const getCallAmountData = async (): Promise<object> => {
    return await triggerPerformance('JSON.stringify(window.$st.MEASURE_PERFORMANCE_CALL_AMOUNT)');
};

const triggerPerformance = async (src: string): Promise<object> => {
    return (resolve, reject) => {
        if (chrome && chrome.devtools && chrome.devtools.inspectedWindow && chrome.devtools.inspectedWindow.eval) {
            chrome.devtools.inspectedWindow.eval(src, (res: string, err) => {
                if (err) {
                    st.error(err);
                    reject(err);
                } else {
                    resolve(JSON.parse(res));
                }
            });
        } else {
            st.warn('chrome.devtools not found');
            resolve({})
        }
    };
};
