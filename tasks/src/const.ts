import type { ModelLibraryKey } from "../../js/src/lib/interfaces/Libraries";
import type { PipelineType } from "../../js/src/lib/interfaces/Types";

/*
 * Model libraries compatible with each ML task
 */
export const TASKS_MODEL_LIBRARIES: Record<PipelineType, ModelLibraryKey[]> = {
	"audio-classification":           ["speechbrain", "transformers"],
	"audio-to-audio":                 ["asteroid", "speechbrain"],
	"automatic-speech-recognition":   ["espnet", "nemo", "speechbrain", "transformers", "transformers.js"],
	"conversational":                 ["transformers"],
	"depth-estimation":               ["transformers"],
	"document-question-answering":    ["transformers"],
	"feature-extraction":             ["sentence-transformers", "transformers", "transformers.js"],
	"fill-mask":                      ["transformers", "transformers.js"],
	"graph-ml":                       ["transformers"],
	"image-classification":           ["keras", "timm", "transformers", "transformers.js"],
	"image-segmentation":             ["transformers", "transformers.js"],
	"image-to-image":                 [],
	"image-to-text":                  ["transformers.js"],
	"video-classification":           [],
	"multiple-choice":                ["transformers"],
	"object-detection":               ["transformers", "transformers.js"],
	"other":                          [],
	"question-answering":             ["adapter-transformers", "allennlp", "transformers", "transformers.js"],
	"robotics":                       [],
	"reinforcement-learning":         ["transformers", "stable-baselines3", "ml-agents", "sample-factory"],
	"sentence-similarity":            ["sentence-transformers", "spacy", "transformers.js"],
	"summarization":                  ["transformers", "transformers.js"],
	"table-question-answering":       ["transformers"],
	"table-to-text":                  ["transformers"],
	"tabular-classification":         ["sklearn"],
	"tabular-regression":             ["sklearn"],
	"tabular-to-text":                ["transformers"],
	"text-classification":            ["adapter-transformers", "spacy", "transformers", "transformers.js"],
	"text-generation":                ["transformers", "transformers.js"],
	"text-retrieval":                 [],
	"text-to-image":                  [],
	"text-to-speech":                 ["espnet", "tensorflowtts", "transformers"],
	"text-to-audio":                  ["transformers"],	
	"text-to-video":                  [],
	"text2text-generation":           ["transformers", "transformers.js"],
	"time-series-forecasting":        [],
	"token-classification":           ["adapter-transformers", "flair", "spacy", "span-marker", "stanza", "transformers", "transformers.js"],
	"translation":                    ["transformers", "transformers.js"],
	"unconditional-image-generation": [],
	"visual-question-answering":      [],
	"voice-activity-detection":       [],
	"zero-shot-classification":       ["transformers", "transformers.js"],
	"zero-shot-image-classification": ["transformers.js"],
};
