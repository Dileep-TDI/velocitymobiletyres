import React from "react";
import { RichContentSection, RichContentBlock, RichContentInline } from "@/lib/types";

function RenderInline({ inline }: { inline: RichContentInline }) {
    if (inline.type === "link") {
        return (
            <a
                href={inline.url}
                className="text-primary hover:underline font-semibold"
                target={inline.url.startsWith("http") ? "_blank" : undefined}
                rel={inline.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {inline.children.map((child, i) => (
                    <RenderInline key={i} inline={child} />
                ))}
            </a>
        );
    }

    let textNode: React.ReactNode = inline.text;

    if (inline.bold) textNode = <strong>{textNode}</strong>;
    if (inline.italic) textNode = <em>{textNode}</em>;
    if (inline.underline) textNode = <u>{textNode}</u>;
    if (inline.code) textNode = <code>{textNode}</code>;

    return <>{textNode}</>;
}

function RenderBlock({ block }: { block: RichContentBlock }) {
    switch (block.type) {
        case "paragraph":
            return (
                <p className="mb-4 text-base leading-relaxed text-foreground/80">
                    {block.children.map((inline, i) => (
                        <RenderInline key={i} inline={inline} />
                    ))}
                </p>
            );

        case "heading": {
            const level = block.level;
            const content = block.children.map((inline, i) => (
                <RenderInline key={i} inline={inline} />
            ));
            if (level === 1) return <h1 className="mt-8 mb-4 font-bold text-foreground">{content}</h1>;
            if (level === 2) return <h2 className="mt-8 mb-4 font-bold text-foreground">{content}</h2>;
            if (level === 3) return <h3 className="mt-8 mb-4 font-bold text-foreground">{content}</h3>;
            if (level === 4) return <h4 className="mt-8 mb-4 font-bold text-foreground">{content}</h4>;
            if (level === 5) return <h5 className="mt-8 mb-4 font-bold text-foreground">{content}</h5>;
            return <h6 className="mt-8 mb-4 font-bold text-foreground">{content}</h6>;
        }

        case "list": {
            const ListTag = block.format === "ordered" ? "ol" : "ul";
            return (
                <ListTag
                    className={`mb-4 pl-6 space-y-1 ${block.format === "ordered" ? "list-decimal" : "list-disc"
                        }`}
                >
                    {block.children.map((item, i) => {
                        if ("type" in item && item.type === "list-item") {
                            return (
                                <li key={i} className="text-foreground/85">
                                    {item.children.map((inline, j) => (
                                        <RenderInline key={j} inline={inline} />
                                    ))}
                                </li>
                            );
                        }
                        return null;
                    })}
                </ListTag>
            );
        }

        case "quote":
            return (
                <blockquote className="border-l-4 border-primary pl-4 py-1 my-4 italic text-foreground/75 bg-muted/30 rounded-r">
                    {block.children.map((inline, i) => (
                        <RenderInline key={i} inline={inline} />
                    ))}
                </blockquote>
            );

        case "code":
            return (
                <pre className="p-4 rounded bg-muted text-sm overflow-x-auto my-4">
                    <code>
                        {block.children.map((inline, i) => (
                            <RenderInline key={i} inline={inline} />
                        ))}
                    </code>
                </pre>
            );
    }
    return null;
}

export default function RichContent({ section }: { section: RichContentSection }) {
    if (!section.content || section.content.length === 0) return null;

    return (
        <section className="container mx-auto px-4 py-12 md:py-16 max-w-6xl rich-content">
            {section.heading && <h2 className="mb-6">{section.heading}</h2>}
            <div>
                {section.content.map((block, i) => (
                    <RenderBlock key={i} block={block} />
                ))}
            </div>
        </section>
    );
}
