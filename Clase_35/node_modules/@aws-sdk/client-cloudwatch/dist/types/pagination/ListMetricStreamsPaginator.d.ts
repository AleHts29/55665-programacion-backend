import { ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput } from "../commands/ListMetricStreamsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMetricStreams(config: CloudWatchPaginationConfiguration, input: ListMetricStreamsCommandInput, ...additionalArguments: any): Paginator<ListMetricStreamsCommandOutput>;
