fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@...";
fil["1"]= "Administration/DataCollectorAdministration.html@@@Data Collector Administration@@@You can view logs, JVM metrics, and shut down the Data Collector from the Administration menu...";
fil["2"]= "Data_Preview/DataPreview.html@@@Data Preview@@@When you preview data, the Preview panel uses different colors to represent different types of data. The Preview panel also uses colors and asterisks to highlight the field values and records that you have changed for testing...";
fil["3"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@...";
fil["4"]= "Data_Preview/PreviewingMultipleStages.html@@@Previewing Multiple Stages@@@You can preview data for a set of linked stages within a pipeline. Preview multiple stages to verify that the set of stages processes data as expected...";
fil["5"]= "Data_Preview/PreviewingaSingleStage.html@@@Previewing and Tuning a Single Stage@@@You can preview data for a single stage. When you preview data for a single stage, you can also change the data to test stage processing. Preview data to verify that the stage processes data as expected...";
fil["6"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target data for the pipeline. You can use one or more destinations in a pipeline...";
fil["7"]= "Destinations/Destinations_title.html@@@Destinations@@@...";
fil["8"]= "Destinations/HadoopFS.html@@@Hadoop FS@@@Hadoop FS creates directories based on a time-based template that you define and the time basis you choose. It writes records to the resulting directories based on the values of the record...";
fil["9"]= "Destinations/KProducer.html@@@Kafka Producer@@@You can add custom Kafka configuration properties to the Kafka Producer...";
fil["10"]= "Destinations/LocalFS.html@@@Local File System@@@Use the Local File System destination to write bad records from the pipeline to files in a local file system...";
fil["11"]= "Destinations/Trash.html@@@Trash@@@Use a Trash destination as a placeholder for testing or to gather statistics or receive alerts about discarded records...";
fil["12"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@The expression language enables you to create expressions that evaluate or modify data. Use the expression language to create expressions in the Expression processor and conditions in the Stream Selector processor...";
fil["13"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["14"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["15"]= "Expression_Language/OperatorPrecedence.html@@@Operator Precedence@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["16"]= "Expression_Language/Operators.html@@@Operators@@@The following table lists the operators that you can use...";
fil["17"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["18"]= "Getting_Started/CreatingAdditionalUsers.html@@@Creating Additional Users@@@The Data Collector includes a default login, admin/admin. You can create additional users for increased security...";
fil["19"]= "Getting_Started/DCollector_Window.html@@@Data Collector Window@@@The Data Collector window provides a user interface to configure pipelines, preview data, and monitor pipelines...";
fil["20"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@...";
fil["21"]= "Getting_Started/Installing_the_DC-Service.html@@@Installing and Launching the Data Collector (Service)@@@Install the Data Collector on the machine that you want to run a pipeline. After installation, you can launch the Data Collector...";
fil["22"]= "Getting_Started/Installing_the_DC.html@@@Installing and Launching the Data Collector (Tarball)@@@Install the Data Collector on the machine that you want to run a pipeline. After installation, you can launch the Data Collector...";
fil["23"]= "Getting_Started/LoggingIn_CreatingPipeline.html@@@Logging In and Creating a Pipeline@@@After you start the Data Collector, you can log in to the Data Collector window and create your first pipeline...";
fil["24"]= "Getting_Started/Requirements.html@@@Installation Requirements@@@Install the Data Collector on a machine with the following minimum requirements...";
fil["25"]= "Getting_Started/What_isa_DataCollector.html@@@What is a Data Collector?@@@Let s walk through it...";
fil["26"]= "Glossary/GlossaryOfTerms.html@@@Glossary of Terms@@@destination A stage type used in a pipeline to represent where the Data Collector writes processed data. origin A stage type used in a pipeline to represent the source of data in a pipeline. pipeline...";
fil["27"]= "Glossary/Glossary_title.html@@@Glossary@@@...";
fil["28"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory. When you configure a Directory, you define general properties, including the data format to process. Then, you define post-processing options and the properties specific to the data format...";
fil["29"]= "Origins/FileTail.html@@@File Tail@@@Configure a File Tail origin to read data as it is written to a file. You can read JSON or log dat...";
fil["30"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read log, delimited, JSON, or XML data from a Kafka cluster. When you configure the Kafka Consumer, you configure the general properties, including Kafka and ZooKeeper details. For delimited and JSON data, configure additional related properties. You can optionally add custom Kafka properties...";
fil["31"]= "Origins/KConsumer_AdvancedProp.html@@@Additional Kafka Properties@@@You can add custom Kafka configuration properties to the Kafka Consumer...";
fil["32"]= "Origins/Origins_overview.html@@@Origins@@@An origin stage represents the data that you want the pipeline to process. You can use a single origin stage in a pipeline...";
fil["33"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["34"]= "Origins/PreviewingRawSourceData.html@@@Previewing Raw Source Data@@@You can preview raw source data when you configure an origin. Preview raw source data when reviewing the data might help with origin configuration...";
fil["35"]= "Pipeline_Configuration/ConfiguringAPipeline.html@@@Configuring a Pipeline@@@Configure a pipeline to define the stream of data. After you configure the pipeline, you can start the pipeline...";
fil["36"]= "Pipeline_Configuration/DataCollectorWindow-Config.html@@@Data Collector Window - Configuration Mode@@@The following image shows the the Data Collector window when you configure a pipeline: Area / Icon Name Description 1 Pipeline canvas Displays the pipeline. Use to configure the stages for the...";
fil["37"]= "Pipeline_Configuration/DeliveryGuarantee.html@@@Delivery Guarantee@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data, or do you want to prevent the duplication of dat...";
fil["38"]= "Pipeline_Configuration/ErrorHandling.html@@@Error Handling@@@You can configure the default error handling for a pipeline. Some stages include error handling properties that override the default. When a Data Collector encounters an unexpected error, it stops the pipeline...";
fil["39"]= "Pipeline_Configuration/MergingStreams.html@@@Merging Streams@@@You can merge streams of data in a pipeline by connecting two or more stages to the same downstream stage. When you merge streams of data, the Data Collector channels the data from all streams to the same stage, but does not perform a join of records in the stream...";
fil["40"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@...";
fil["41"]= "Pipeline_Configuration/ReprocessingBadRecords.html@@@Reprocessing Bad Records@@@...";
fil["42"]= "Pipeline_Configuration/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data for the Data Collector...";
fil["43"]= "Pipeline_Maintenance/DeletingAPipeline.html@@@Deleting a Pipeline@@@You can delete a pipeline when you no longer need it. Deleting a pipeline is permanent. If you think you might want to archive a pipeline, you might export the pipeline before you delete it...";
fil["44"]= "Pipeline_Maintenance/DuplicatingAPipeline.html@@@Duplicating a Pipeline@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["45"]= "Pipeline_Maintenance/ExportingAPipeline.html@@@Exporting a Pipeline@@@Export a pipeline when you want to use the pipeline with another Data Collector. You might also export a pipeline as a safeguard before you upgrade the Data Collector...";
fil["46"]= "Pipeline_Maintenance/ImportingAPipeline.html@@@Importing a Pipeline@@@Import a pipeline to use a pipeline developed on a different Data Collector. When you import a pipeline, you create a pipeline and then import the pipeline...";
fil["47"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@...";
fil["48"]= "Pipeline_Maintenance/StartingAPipeline.html@@@Starting a Pipeline@@@You can start a pipeline when it is valid. When you start a pipeline, the Data Collector runs the pipeline until you stop the pipeline or shut down the Data Collector...";
fil["49"]= "Pipeline_Maintenance/StoppingAPipeline.html@@@Stopping a Pipeline@@@Stop a pipeline when you want the Data Collector to stop processing data for the pipeline...";
fil["50"]= "Pipeline_Monitoring/DataAlerts.html@@@Data Alerts@@@...";
fil["51"]= "Pipeline_Monitoring/MetricAlerts.html@@@Metric Alerts@@@...";
fil["52"]= "Pipeline_Monitoring/PipelineMonitoring.html@@@Pipeline Monitoring@@@When the Data Collector runs a pipeline, you can view real-time statistics about the pipeline and examine a sampling of the data being processed. Monitor a pipeline to verify that the pipeline processes data as expected, to view a sample of the current data, or to create alerts...";
fil["53"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@...";
fil["54"]= "Pipeline_Monitoring/ReviewingSnapshotData.html@@@Reviewing a Snapshot of Data@@@You can review a snapshot of data that passes through the pipeline. When you request a snapshot, the Data Collector takes a snapshot of the data being processed. You can then review the snapshot stage by stage or through a set of stages, like data preview...";
fil["55"]= "Pipeline_Monitoring/ViewingPipelineStageStatistics.html@@@Viewing Pipeline and Stage Statistics@@@When you monitor a pipeline, you can view real-time summary and error statistics for the pipeline and for stages in the pipeline. You can view the configuration of the pipeline or selected stage to help determine if you need to make changes. You can also view the run history for the pipeline...";
fil["56"]= "Processors/BasicSyntax.html@@@Basic Syntax@@@Precede all expressions with a dollar sign and enclose them with curly brackets, as follows: ${&lt;expression&gt...";
fil["57"]= "Processors/ConfiguringExpressionsConditions.html@@@Configuring Expressions and Conditions@@@You can define constants that you can reuse within a processor. Define a constant when you have a constant value that you want use more than once in the processor or that you want to be able to update easily. You can define constants in the Expression and Stream Selector processors...";
fil["58"]= "Processors/Expression.html@@@Expression Evaluator@@@Configure an Expression Evaluator to perform calculations on records on a row-by-row basis...";
fil["59"]= "Processors/FieldConverter.html@@@Field Converter@@@Configure a Field Converter to convert the data type of a field...";
fil["60"]= "Processors/FieldHasher.html@@@Field Hasher@@@Configure a Field Hasher to encode sensitive dat...";
fil["61"]= "Processors/FieldMasker.html@@@Field Masker@@@Configure a Field Masker to mask sensitive dat...";
fil["62"]= "Processors/FieldRemover.html@@@Field Remover@@@Use a Field Remover to remove unwanted fields from the pipeline...";
fil["63"]= "Processors/FieldSplitter.html@@@Field Splitter@@@Configure a Field Splitter to split data from a single field into multiple fields. You can split data from a single field. To split additional fields, add another Field Splitter to the pipeline...";
fil["64"]= "Processors/JSONParser.html@@@JSON Parser@@@Use a JSON Parser to parse a JSON object in a String field...";
fil["65"]= "Processors/Processors_overview.html@@@Processors@@@At various points in a pipeline, you can use preview data to help select fields. Preview data displays when a pipeline is configured to a point where you can to perform a data preview...";
fil["66"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["67"]= "Processors/RDeduplicator-ComparisonWindow.html@@@Comparison Window@@@The Record Deduplicator compares records until it reaches the record limit. Then, it discards the information kept in memory and starts fresh. You can configure a time limit to trigger a refresh at regular time intervals as well...";
fil["68"]= "Processors/RDeduplicator-Configuring.html@@@Configuring a Record Deduplicator@@@Use a Record Deduplicator to remove records with duplicate dat...";
fil["69"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@The Record Deduplicator discards records from the pipeline that include duplicate data. The Record Deduplicator routes data to two streams, one for unique records and one for duplicate records. Use the Record Deduplicator to route or discard duplicate dat...";
fil["70"]= "Processors/StreamSelector.html@@@Stream Selector@@@Use a Stream Selector to route data to different streams...";
fil["71"]= "Processors/UsingFieldNamesinExpressions.html@@@Using Field Names in Expressions@@@When you use a field name in an expression, use the following syntax...";
fil["72"]= "Processors/ValueReplacer.html@@@Value Replacer@@@Use a Value Replacer to replace null values in a field or to set fields to NULL...";
fil["73"]= "Reusable_Content/RequiredFields.html@@@Required Fields@@@You can configure required fields for any processor or target stage. A required field must exist in a record to keep it in the pipeline...";
fil["74"]= "Troubleshooting/Troubleshooting.html@@@Troubleshooting@@@We hope the following troubleshooting tips might help you with any issues you might be having. If you have suggestions for additional troubleshooting items, please send them to docs@streamsets.com...";
fil["75"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@...";
