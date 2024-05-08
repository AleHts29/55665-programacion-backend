"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateGetMetricData = void 0;
const CloudWatch_1 = require("../CloudWatch");
const CloudWatchClient_1 = require("../CloudWatchClient");
const GetMetricDataCommand_1 = require("../commands/GetMetricDataCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new GetMetricDataCommand_1.GetMetricDataCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.getMetricData(input, ...args);
};
async function* paginateGetMetricData(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxDatapoints"] = config.pageSize;
        if (config.client instanceof CloudWatch_1.CloudWatch) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CloudWatchClient_1.CloudWatchClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateGetMetricData = paginateGetMetricData;
//# sourceMappingURL=GetMetricDataPaginator.js.map