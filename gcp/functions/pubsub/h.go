package pubsub

import (
	"context"
	"fmt"
	"log"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
	"github.com/cloudevents/sdk-go/v2/event"
)

func init() {
	functions.CloudEvent("HelloPubSub", helloPubSub)
}

type MessagePublishedData struct {
	Message PubSubMessage
}

type PubSubMessage struct {
	Data []byte `json:"data"`
}

func helloPubSub(ctxt context.Context, e event.Event) error {
	var m MessagePublishedData
	if err := e.DataAs(&m); err != nil {
		return fmt.Errorf("event.DataAs: %w", err)
	}

	name := string(m.Message.Data)
	if name == "" {
		name = "World"
	}
	log.Printf("Hello, %s!", name)
	return nil
}
