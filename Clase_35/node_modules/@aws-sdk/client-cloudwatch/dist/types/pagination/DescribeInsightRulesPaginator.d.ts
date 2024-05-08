import { DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput } from "../commands/DescribeInsightRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateDescribeInsightRules(config: CloudWatchPaginationConfiguration, input: DescribeInsightRulesCommandInput, ...additionalArguments: any): Paginator<DescribeInsightRulesCommandOutput>;
